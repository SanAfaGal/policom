/**
 * Save an array of computer objects to local storage for a specific room.
 *
 * @param {string} roomId - The ID of the room for which computers are being saved.
 * @param {Array} computersArray - The array of computer objects to be saved.
 */
export const saveComputersToLocalStorage = (roomId, computersArray) => {
    try {
        if (!localStorage) {
            console.error('Local storage is not available.');
            return;
        }

        localStorage.setItem(`computers-${roomId}`, JSON.stringify(computersArray));
    } catch (error) {
        console.error('Error saving computers to local storage:', error.message);
    }
};

/**
 * Retrieve an array of computer objects from local storage for a specific room.
 *
 * @param {string} roomId - The ID of the room for which computers are being retrieved.
 * @returns {Array|null} An array of computer objects if found, or null if not found.
 */
export const getComputersFromLocalStorage = (roomId) => {
    try {
        const storedData = localStorage.getItem(`computers-${roomId}`);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error('Error retrieving computers from local storage:', error.message);
        return null;
    }
};

/**
 * Update booking information in local storage for a user, including computer reservation and user history.
 *
 * @param {string} userId - The ID of the user making the reservation.
 * @param {string} roomId - The ID of the room for which the reservation is made.
 * @param {string} computerId - The ID of the reserved computer.
 * @param {Object} interval - The time interval of the reservation.
 */
export const updateBookingInfoInLocalStorage = (userId, roomId, computerId, interval) => {
    try {
        updateComputerReservationInLocalStorage(roomId, computerId);
        updateHistoryReservationInLocalStorageByUser(userId, roomId, computerId, interval);
    } catch (error) {
        console.error('Error making reservation', error.message);
    }
};

/**
 * Update the user's reservation history in local storage with a new booking.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} roomId - The ID of the room for the reservation.
 * @param {string} computerId - The ID of the reserved computer.
 * @param {Object} interval - The time interval of the reservation.
 */
function updateHistoryReservationInLocalStorageByUser(userId, roomId, computerId, interval) {
    try {
        if (!localStorage) {
            console.error('Local storage is not available.');
            return;
        }

        const userInfo = getUserHistoryBookingFromLocalStorage(userId);
        const newBooking = { roomId, computerId, interval };

        if (userInfo) {
            const updatedInfo = [...userInfo, newBooking];
            localStorage.setItem(`user_${userId}`, JSON.stringify(updatedInfo));
        } else {
            localStorage.setItem(`user_${userId}`, JSON.stringify([newBooking]));
        }

    } catch (error) {
        console.error('Error updating computer status in local storage:', error.message);
    }
}

/**
 * Retrieve the user's reservation history from local storage.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Array|null} An array of user's reservation history if found, or null if not found.
 */
function getUserHistoryBookingFromLocalStorage(userId) {
    try {
        const storedData = localStorage.getItem(`user_${userId}`);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error('Error retrieving user information from local storage:', error.message);
        return null;
    }
}

/**
 * Update the reservation status of a specific computer in local storage for a specific room.
 *
 * @param {string} roomId - The ID of the room.
 * @param {string} computerId - The ID of the computer to update.
 */
function updateComputerReservationInLocalStorage(roomId, computerId) {
    try {
        if (!localStorage) {
            console.error('Local storage is not available.');
            return;
        }

        const computersList = getComputersFromLocalStorage(roomId);
        const computerToUpdate = computersList.find((computer) => computer.id === computerId);

        if (computerToUpdate) {
            computerToUpdate.reserved = true;
            localStorage.setItem(`computers-${roomId}`, JSON.stringify(computersList));
        } else {
            console.error('Computer not found in local storage.');
        }
    } catch (error) {
        console.error('Error updating computer status in local storage:', error.message);
    }
}
