import React, { useContext, useEffect, useState } from 'react';
import { BoardOne, BoardTwo, BoardThree, BoardFour, BoardFive } from '@/features/main/component';
const MainConent = () => {
    return (
        <>
            {/*공지사항 진척사항 */}
            <BoardOne />
            {/*일정/인력/Risk/Issue/Action Item/변경 요청 */}
            <BoardTwo />
            {/*요구사항/ 일정 / 운영전환 */}
            {/* <BoardThree />
            <BoardFour /> */}
            <BoardFive />
        </>
    );
}
export default MainConent