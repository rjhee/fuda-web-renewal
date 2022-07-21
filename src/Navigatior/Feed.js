import React from 'react';
import {Route, Routes} from "react-router-dom";
import FeedScreen from "../Pages/Root/Feed/FeedScreen";
import FeedCardLists from "../Components/Feed/FeedCardLists";
import FeedCardDetailScreen from "../Pages/Root/Feed/FeedCardDetailScreen";
import FeedLottoListScreen from "../Pages/Root/Feed/FeedLottoListScreen";
import FeedCardLottoDetailScreen from "../Pages/Root/Feed/FeedCardLottoDetailScreen";
import FeedCardEventDetailScreen from "../Pages/Root/Feed/FeedCardEventDetailScreen";
import FeedWinningWriteScreen from "../Pages/Root/Feed/FeedWinningWriteScreen";
import FeedWriteScreen from "../Pages/Root/Feed/FeedWriteScreen";

const Feed = () => {
    const FEED = '/feed';
    const ID = '/:id';
    const DETAIL = '/detail';
    const LOTTO = '/lotto';
    const WRITE = '/write';
    const LOTTO_TYPE = '/:lotto';

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
                    lottoListPath={FEED + RESULT}
                />}/>
            <Route path={FEED + ID + ID} element={<FeedCardDetailScreen winnerSharePath={FEED + WINNER_SHARE} wishBoardPath={FEED + WISH_BOARD} writePath={WRITE}/>}/>
            <Route path={FEED + RESULT + ID + ID} element={<FeedCardLottoDetailScreen/>}/>
            <Route path={FEED + EVENT + ID} element={<FeedCardEventDetailScreen/>}/>

            <Route path={FEED + ID + LOTTO_TYPE} element={<FeedLottoListScreen detailPath={FEED + RESULT}/>}/>

            <Route path={FEED + ID + DETAIL + ID} element={<FeedCardEventDetailScreen/>}/>
            <Route path={FEED + ID + WRITE} element={<FeedWriteScreen/>}/>
            <Route path={FEED + ID + WRITE + ID} element={<FeedWriteScreen/>}/>
            {/*<Route path="/feed/" element={<FeedContents/>}/>*/}
        </Routes>
    );
};

export default Feed;