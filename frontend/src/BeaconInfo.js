import React from 'react';

const BeaconInfo = ({ username, startTime, endTime, gameTitle, miscInfo, gamePic, userPic }) => {
    return (
        <div className="bg-white rounded-lg w-full max-w-md mx-auto shadow-lg my-5 p-2 px-2 flex justify-between">
            <div className='ml-2 mt-2 text-left'>
                <div className="flex items-baseline mb-2">
                    <img src={userPic} alt="Game Pic" className="top-0 right-0 h-16 w-16 mr-4" />
                    <h1 className="text-3xl font-bold">{username}</h1>
                </div>
                <div className='ml-4'>
                    <h2 className="text-2xl mb-2">{gameTitle}</h2>
                    <p className="text-lg mb-2">{startTime} - {endTime}</p>
                    <p className="mb-2 text-lg">Misc Info: <span className="font-light">{miscInfo}</span></p>
                </div>
            </div>
            <img src={gamePic} alt="Game Pic" className="top-0 right-0 h-32 w-32 rounded-full" />
        </div>
    )
};

BeaconInfo.defaultProps = {
    username: "username",
    startTime: "start",
    endTime: "end",
    gameTitle: "game title",
    miscInfo: "misc info",
    gamePic: "images/catCry.jpg",
    userPic: "images/catCry.jpg"
};

export default BeaconInfo;