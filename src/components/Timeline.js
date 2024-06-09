import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timeline = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ date: '', title: '', description: '' });
    const [updatingEventId, setUpdatingEventId] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://apdoptdogserver.onrender.com/api/timeline-events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching timeline events:', error);
        }
    };

    const addEvent = async () => {
        try {
            await axios.post('https://apdoptdogserver.onrender.com/api/timeline-events', newEvent);
            setNewEvent({ date: '', title: '', description: '' });
            fetchEvents();
        } catch (error) {
            console.error('Error adding timeline event:', error);
        }
    };

    const updateEvent = async (id, updatedEvent) => {
        try {
            await axios.put(`https://apdoptdogserver.onrender.com/api/timeline-events/${id}`, updatedEvent);
            setUpdatingEventId(null);
            fetchEvents();
        } catch (error) {
            console.error('Error updating timeline event:', error);
        }
    };

    const deleteEvent = async (id) => {
        try {
            await axios.delete(`https://apdoptdogserver.onrender.com/api/timeline-events/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting timeline event:', error);
        }
    };

    return (
            <div className='p-4 text-black'>
                <h1 className='text-3xl my-5 font-semibold text-center'>Timeline</h1>
                <div className='mb-6'>
                    <label className='block text-sm font-medium mb-1'>Date:</label>
                    <input
                        type='date'
                        value={newEvent.date}
                        onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                        className='w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-400'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-sm font-medium mb-1'>Title:</label>
                    <input
                        type='text'
                        value={newEvent.title}
                        onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                        className='w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-400'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-sm font-medium mb-1'>Description:</label>
                    <textarea
                        value={newEvent.description}
                        onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                        className='w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-400'
                    />
                </div>
                <button
                    onClick={addEvent}
                    className='bg-black text-white px-4 py-2 rounded transition duration-200'
                >
                    Add Event
                </button>
                <div className='my-10'>
                    <h2 className='text-3xl mt-8 my-8 text-center font-semibold'>Timeline Events</h2>
                    {events.map(event => (
                        <div key={event.id} className=''>
                            {updatingEventId === event.id ? (
                                <>
                                    <div className='pb-4'>
                                        <label>Date:</label>
                                        <input type='date' value={event.date.split('T')[0]} onChange={e => updateEvent(event.id, { ...event, date: e.target.value })} />
                                    </div>
                                    <div className='pb-4'>
                                        <label>Title:</label>
                                        <input type='text' value={event.title} onChange={e => updateEvent(event.id, { ...event, title: e.target.value })} />
                                    </div>
                                    <div className='pb-4'>
                                        <label>Description:</label>
                                        <textarea value={event.description} onChange={e => updateEvent(event.id, { ...event, description: e.target.value })} />
                                    </div>
                                    <button onClick={() => setUpdatingEventId(null)} className='bg-gray-500 text-white px-4 py-2 rounded mr-2'>Cancel</button>
                                </>
                            ) : (
                                <>

                                    <ol class="relative border-s border-gray-400 ">

                                        <li class="pb-10 ps-4 ">
                                            <div class="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">{new Date(event.date).toLocaleDateString()}</time>
                                            <h3 class="text-lg font-semibold text-gray-900 ">{event.title}</h3>
                                            <p class="text-base font-normal text-gray-500 ">{event.description}</p>
                                            <p class="text-base font-normal text-gray-500 w-24 flex flex-row justify-between h-10">
                                                <button onClick={() => setUpdatingEventId(event.id)} className=''>
                                                    <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z" fill="#000000"></path> </g></svg>
                                                </button>
                                                <button onClick={() => deleteEvent(event.id)} className=''>
                                                    <svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ff0000" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </button>
                                            </p>

                                        </li>
                                    </ol>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
};

export default Timeline;
