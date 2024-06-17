// lib/internships.js

export async function getInternshipsData() {
    // Fetch your internship data from wherever it's stored
    // For demonstration purposes, I'll create a simple array of objects
    const internshipsData = [
      {
        id: '1',
        date: '2023-07-02 ',
        end : '2023-11-01',
        company: 'random data',
        role: 'Observatory Project',
        description: `
        • Developed a web application for the Astronomy Club of MIT-WPU, Pune.
        • The application is designed to help students learn about the night sky and the celestial objects in it.
        • The application includes a sky map, a database of celestial objects, and a quiz section.
        • Technologies used include React, Next.js, and Tailwind CSS.
        `,
      },
      {
        id: '2',
        date: '2024-01-02',
        end: '2024-03-02',
        company: 'random data',
        role: 'Ground Station',
        description: `
        • Developed a ground station for the Astronomy Club of MIT-WPU, Pune.
        • The ground station is used to track satellites and receive data from them.
        • The ground station includes a rotator, an antenna, and a radio receiver.
        • Technologies used include Arduino, Raspberry Pi, and Python.
        `,
      },
      
      // Add more internship data as needed
    ];
  
    return internshipsData;
  }
  