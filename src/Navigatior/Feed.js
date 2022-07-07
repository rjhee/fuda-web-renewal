import React from 'react';
import {Route, Routes} from "react-router-dom";
import FeedScreen from "../Pages/Root/Feed/FeedScreen";
import FeedCardLists from "../Components/Feed/FeedCardLists";
import FeedCardDetailScreen from "../Pages/Root/Feed/FeedCardDetailScreen";

const Feed = () => {
    const FEED = '/feed';
    const ID = '/:id';
    const DETAIL = '/detail';

    const ALL = '/all';
    const OFFICIAL = '/official';
    const NEWS = '/news';
    const EVENT = '/event';
    const RESULT = '/result';
    const WINNER = '/winner';
    const WINNER_SHARE = '/winnerShare';
    const WISH_BOARD = '/wishBoard';
    const MAIL = '/mail';

    return (
        <Routes>
            <Route path={FEED + ID} element={
                <FeedScreen
                    feedPath={FEED}
                    detailPath={DETAIL}
                    allPath={FEED + ALL}
                    officialPath={FEED + OFFICIAL}
                    newsPath={FEED + NEWS}
                    eventPath={FEED + EVENT}
                    resultPath={FEED + RESULT}
                    winnerPath={FEED + WINNER}
                    winnerSharePath={FEED + WINNER_SHARE}
                    wishBoardPath={FEED + WISH_BOARD}
                    mailPath={FEED + MAIL}
                />}/>
            <Route path={FEED + ID + DETAIL + ID} element={<FeedCardDetailScreen/>}/>
            {/*<Route path="/feed/" element={<FeedContents/>}/>*/}
        </Routes>
    );
};

export default Feed;