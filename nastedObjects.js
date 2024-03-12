let log = {
    id: {
        IDgenerator() {
            let ID: Math.random() * 16;
            if (ID > 0) { return ID; }
        }
    },
    name: 'hadi',
    date: '',
    active: {
        vcLevel: (vcMins) => vcMins / 7,
        msgLevel: (msg, msgType, current = 0) => {
            switch (msgType) {
                case 'photo':
                    return current + 23;
                case 'voice':
                    return current + 13;
                case 'message':
                    return current + 8;
                default:
                    return current;
            }
        },
    },
    leaders: [],

    // Server members
    members: [
        { id: 1, name: 'Alice', role: 'user' },
        { id: 2, name: 'Bob', role: 'user' },
    ],

    // Server admins
    admins: [
        { id: 101, name: 'Admin1', role: 'admin' },
        { id: 102, name: 'Admin2', role: 'admin' },
    ],

    // Log an activity (e.g., VC or message)
    logActivity(activityType, details) {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] Activity: ${activityType}`, details);
    },
};

// Example usage:
log.logActivity('voice', { user: 'Alice', duration: 10 });
log.logActivity('message', { user: 'Bob', type: 'photo' }); 
