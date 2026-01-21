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
    "ConferenceRoom.jpg": conferenceRoom,
    "Auditorium.jpg": auditorium,
    "PresentationRoom.jpg": presentationRoom,
    "LargeMeetingRoom.jpg": largeMeetingRoom,
    "SmallMeetingRoom.jpg": smallMeetingRoom,
    "ExecutiveBoardRoom.jpg": boardRoom,
    "TrainingLab.jpg": trainingLab,
    "Workshop.jpg": workshop,
    "RooftopGarden.jpg": rooftop,
};

export const getImage = (imageName) => {
    return imageMap[imageName] || imageError;
};