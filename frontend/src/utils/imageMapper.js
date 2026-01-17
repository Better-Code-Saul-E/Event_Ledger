import conferenceRoom from '../assets/images/ConferenceRoom.jpg';
import auditorium from '../assets/images/Auditorium.jpg';
import presentationRoom from '../assets/images/PresentationRoom.jpg';
import largeMeetingRoom from '../assets/images/LargeMeetingRoom.jpg';
import smallMeetingRoom from '../assets/images/SmallMeetingRoom.jpg';
import boardRoom from '../assets/images/ExecutiveBoardRoom.jpg';
import trainingLab from '../assets/images/TrainingLab.jpg';
import workshop from '../assets/images/Workshop.jpg';
import rooftop from '../assets/images/RooftopGarden.jpg';
import imageError from '../assets/images/ImageError.png';

const imageMap = {
    "/src/assets/ConferenceRoom.jpg": conferenceRoom,
    "/src/assets/Auditorium.jpg": auditorium,
    "/src/assets/PresentationRoom.jpg": presentationRoom,
    "/src/assets/LargeMeetingRoom.jpg": largeMeetingRoom,
    "/src/assets/SmallMeetingRoom.jpg": smallMeetingRoom,
    "/src/assets/ExecutiveBoardRoom.jpg": boardRoom,
    "/src/assets/TrainingLab.jpg": trainingLab,
    "/src/assets/Workshop.jpg": workshop,
    "/src/assets/RooftopGarden.jpg": rooftop
};

export const getImage = (dbPath) => {
    return imageMap[dbPath] || imageError;
};