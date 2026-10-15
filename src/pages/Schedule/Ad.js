import React, { useState, useCallback } from 'react';
// Use CDN imports to resolve dependencies in this environment
import { Calendar as BigCalendar, momentLocalizer } from 'https://esm.sh/react-big-calendar';
import moment from 'https://esm.sh/moment';
// CSS for react-big-calendar is imported via a <style> tag at the end of the component.
import { Calendar, Mail, Apple, X, ArrowLeft, ArrowRight, User, Mail as MailIcon, Phone, MapPin, Building2 } from 'lucide-react';

// Setup the localizer by providing the moment object
const localizer = momentLocalizer(moment);

// --- Sample Data for Advertisement Events ---
// In a real app, you would fetch this from a server.
const initialEvents = [
    {
        id: 1,
        title: 'Sponsor Booth Setup - City Tournament',
        start: moment('2025-10-05T09:00:00').toDate(),
        end: moment('2025-10-05T17:00:00').toDate(),
        location: 'Delhi Sports Complex, Main Hall',
        type: 'sponsorship',
        bookedBy: null, // null means available
        price: '₹15,000',
        description: 'Premium sponsor booth location with high visibility during major tournament'
    },
    {
        id: 2,
        title: 'Banner Advertisement Slot',
        start: moment('2025-10-08T18:00:00').toDate(),
        end: moment('2025-10-08T21:00:00').toDate(),
        location: 'National Volleyball Stadium',
        type: 'advertisement',
        bookedBy: { name: 'ABC Sports Inc', email: 'contact@abcsports.com', phone: '+91 98765 43210' },
        price: '₹8,000',
        description: 'Stadium banner display during evening matches'
    },
    {
        id: 3,
        title: 'Product Launch Event Space',
        start: moment('2025-10-12T14:00:00').toDate(),
        end: moment('2025-10-12T18:00:00').toDate(),
        location: 'Community Sports Center',
        type: 'event',
        bookedBy: null,
        price: '₹25,000',
        description: 'Exclusive venue for product launches with volleyball theme'
    },
    {
        id: 4,
        title: 'Jersey Sponsorship Opportunity',
        start: moment('2025-10-15T10:00:00').toDate(),
        end: moment('2025-10-15T22:00:00').toDate(),
        location: 'Delhi Toofans Home Ground',
        type: 'sponsorship',
        bookedBy: null,
        price: '₹50,000',
        description: 'Team jersey sponsor logo placement for full season'
    },
    {
        id: 5,
        title: 'Digital Board Advertisement',
        start: moment('2025-10-20T16:00:00').toDate(),
        end: moment('2025-10-20T20:00:00').toDate(),
        location: 'Sports Arena LED Displays',
        type: 'advertisement',
        bookedBy: null,
        price: '₹12,000',
        description: 'Digital advertisement display during prime time matches'
    },
];

// --- Helper Function to Generate 'Add to Calendar' Links ---
const generateCalendarLinks = (event) => {
    if (!event) return [];
    
    const formatTime = (date) => moment(date).utc().format('YYYYMMDDTHHmmss') + 'Z';

    const startTime = formatTime(event.start);
    const endTime = formatTime(event.end);
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(`${event.description} at ${event.location}. Price: ${event.price}`);
    const location = encodeURIComponent(event.location);

    const googleLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    const outlookLink = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${startTime}&enddt=${endTime}&subject=${title}&body=${details}&location=${location}`;
    
    // For iCal, we create a data URI
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `URL:${document.location.href}`,
        `DTSTART:${formatTime(event.start)}`,
        `DTEND:${formatTime(event.end)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description} at ${event.location}. Price: ${event.price}`,
        `LOCATION:${event.location}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');
    const appleLink = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;

    return [
        { name: 'Google', href: googleLink, icon: <Calendar size={40} color="#4285F4" /> },
        { name: 'Outlook', href: outlookLink, icon: <Mail size={40} color="#0072C6" /> },
        { name: 'Apple', href: appleLink, icon: <Apple size={40} color="#333" /> }
    ];
};

// --- Custom Toolbar for the Calendar ---
const CustomToolbar = ({ label, onNavigate }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-[#3b0067] rounded-t-lg">
            <button
                type="button"
                onClick={() => onNavigate('PREV')}
                className="p-2 rounded-full hover:bg-purple-700 text-white transition-colors"
                aria-label="Previous"
            >
                <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-white">{label}</h2>
            <button
                type="button"
                onClick={() => onNavigate('NEXT')}
                className="p-2 rounded-full hover:bg-purple-700 text-white transition-colors"
                aria-label="Next"
            >
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
};

// --- Main Ad Component ---
const Ad = () => {
    const [events, setEvents] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({ name: '', email: '', phone: '', company: '' });
    const [isBooked, setIsBooked] = useState(false);

    // Style events based on type and booking status
    const eventPropGetter = useCallback(
        (event) => {
            let backgroundColor = '#3b0067'; // Default purple
            let borderColor = '#2d0050';
            
            if (event.bookedBy) {
                backgroundColor = '#dc2626'; // Red for booked
                borderColor = '#991b1b';
            } else {
                switch (event.type) {
                    case 'sponsorship':
                        backgroundColor = '#059669'; // Green for sponsorship
                        borderColor = '#047857';
                        break;
                    case 'advertisement':
                        backgroundColor = '#0284c7'; // Blue for advertisement
                        borderColor = '#0369a1';
                        break;
                    case 'event':
                        backgroundColor = '#ea580c'; // Orange for events
                        borderColor = '#c2410c';
                        break;
                    default:
                        backgroundColor = '#3b0067';
                        borderColor = '#2d0050';
                }
            }

            return {
                style: {
                    backgroundColor,
                    borderColor,
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    opacity: 0.9,
                },
            };
        },
        []
    );

    const handleSelectEvent = (event) => {
        if (event.bookedBy) {
            alert(`This opportunity is already booked by ${event.bookedBy.name}.`);
            return;
        }
        setSelectedEvent(event);
        setIsBooked(false);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
        setBookingDetails({ name: '', email: '', phone: '', company: '' });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone) {
            alert('Please fill in name, email, and phone number.');
            return;
        }

        // Simulate API call and update state
        setEvents(prevEvents =>
            prevEvents.map(ev =>
                ev.id === selectedEvent.id
                    ? { 
                        ...ev, 
                        bookedBy: { 
                            name: bookingDetails.name, 
                            email: bookingDetails.email,
                            phone: bookingDetails.phone,
                            company: bookingDetails.company
                        } 
                    }
                    : ev
            )
        );
        
        // Update selected event with booking info to generate correct links
        setSelectedEvent(prev => ({
            ...prev, 
            bookedBy: {
                name: bookingDetails.name, 
                email: bookingDetails.email,
                phone: bookingDetails.phone,
                company: bookingDetails.company
            }
        }));
        setIsBooked(true); // Switch modal view to confirmation
    };

    const calendarLinks = isBooked ? generateCalendarLinks(selectedEvent) : [];

    const getTypeColor = (type) => {
        switch (type) {
            case 'sponsorship': return 'text-green-600';
            case 'advertisement': return 'text-blue-600';
            case 'event': return 'text-orange-600';
            default: return 'text-purple-600';
        }
    };

    const getTypeBackground = (type) => {
        switch (type) {
            case 'sponsorship': return 'bg-green-100';
            case 'advertisement': return 'bg-blue-100';
            case 'event': return 'bg-orange-100';
            default: return 'bg-purple-100';
        }
    };

    return (
        <div className="p-4 md:p-8 font-sans bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-2 md:p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Advertisement & Sponsorship Opportunities
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Book your advertising slots and sponsorship opportunities with Delhi Toofans
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 mb-6 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-600 rounded"></div>
                        <span className="text-sm font-medium">Sponsorship</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        <span className="text-sm font-medium">Advertisement</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-600 rounded"></div>
                        <span className="text-sm font-medium">Event Space</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-600 rounded"></div>
                        <span className="text-sm font-medium">Booked</span>
                    </div>
                </div>

                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '70vh' }}
                    onSelectEvent={handleSelectEvent}
                    eventPropGetter={eventPropGetter}
                    components={{
                        toolbar: CustomToolbar
                    }}
                    views={['month', 'week', 'day']}
                    popup
                    defaultDate={moment('2025-10-01').toDate()} // Start calendar in October 2025
                />
            </div>

            {/* Booking Modal */}
            {isModalOpen && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-95 animate-scale-in">
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h2>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeBackground(selectedEvent.type)} ${getTypeColor(selectedEvent.type)}`}>
                                        {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                                    </span>
                                </div>
                                <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-200 transition-colors">
                                    <X size={24} className="text-gray-500" />
                                </button>
                            </div>
                            
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-500">{moment(selectedEvent.start).format('dddd, MMMM Do YYYY')}</p>
                                <p className="text-gray-600 font-medium">
                                    {moment(selectedEvent.start).format('h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                                </p>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin size={16} />
                                    <span>{selectedEvent.location}</span>
                                </div>
                                <p className="text-2xl font-bold text-[#3b0067]">{selectedEvent.price}</p>
                                <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">{selectedEvent.description}</p>
                            </div>
                            
                            {!isBooked ? (
                                /* --- Booking Form View --- */
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-t pt-4">Book This Opportunity</h3>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                            <input
                                                type="text"
                                                placeholder="Contact Person Name *"
                                                value={bookingDetails.name}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b0067] focus:border-[#3b0067] outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                            <input
                                                type="email"
                                                placeholder="Email Address *"
                                                value={bookingDetails.email}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b0067] focus:border-[#3b0067] outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number *"
                                                value={bookingDetails.phone}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b0067] focus:border-[#3b0067] outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                                            <input
                                                type="text"
                                                placeholder="Company/Organization (Optional)"
                                                value={bookingDetails.company}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, company: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b0067] focus:border-[#3b0067] outline-none"
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        onClick={handleBooking}
                                        className="w-full mt-6 bg-[#3b0067] text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b0067]"
                                    >
                                        Confirm Booking - {selectedEvent.price}
                                    </button>
                                </div>
                            ) : (
                                /* --- Confirmation & Add to Calendar View --- */
                                <div className="text-center border-t pt-4">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Booking Confirmed!</h3>
                                    <p className="text-gray-600 mb-4">
                                        Thank you for booking with Delhi Toofans! A confirmation email will be sent to <span className="font-semibold">{bookingDetails.email}</span>.
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <p className="text-sm text-gray-600">
                                            Our team will contact you at <span className="font-semibold">{bookingDetails.phone}</span> within 24 hours to discuss payment and setup details.
                                        </p>
                                    </div>
                                    <h4 className="text-md font-semibold text-gray-700 mb-3">Add to your calendar:</h4>
                                    <div className="flex justify-center gap-4">
                                        {calendarLinks.map((link) => (
                                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors w-24">
                                                {link.icon}
                                                <span className="mt-2 text-sm text-gray-600">{link.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                    <button onClick={closeModal} className="w-full mt-6 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx global>{`
              @import url('https://cdn.jsdelivr.net/npm/react-big-calendar@1.8.5/lib/css/react-big-calendar.css');
              
              @keyframes scale-in {
                from {
                  transform: scale(0.95);
                  opacity: 0;
                }
                to {
                  transform: scale(1);
                  opacity: 1;
                }
              }
              .animate-scale-in {
                animation: scale-in 0.2s ease-out forwards;
              }
            `}</style>
        </div>
    );
};

export default Ad;