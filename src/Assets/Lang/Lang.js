export const lang = () => {
    /*
    a_number = alert Text
    t_number = title Text
    c_number = content Text
     */

    const kr = {
        //---------Title Text------------
        't_1' : '푸다로또',
        't_2' : '樂透是一門科學',
        't_3' : '로그인',

        //---------Content Text-----------
        'c_1' : 'The Figures Inc.',
        'c_2' : '비번찾기',
        'c_3' : '회원가입',
        'c_4' : 'Google 로그인',
        'c_5' : 'Apple 로그인',

        //---------Alert Text-----------
        'a_1' : 'Loading',
        'a_2' : '아이디를 입력해주세요',
        'a_3' : '패스워드를 입력해주세요',
    };

    const tw = {
        //---------Title Text------------
        'FUDA_LOTTO' : '富達樂透',
        'TOTAL_AMOUNT' : '總中獎金額',
        'LOTTO_IS_SCIENCE' : '樂透是一門科學',
        'LOGIN' : '登入',
        'TEMPORARY_PW' : '臨時密碼',
        'JOIN' : '加入會員',
        'WIN_MEMBER' : '中獎會員數',
        'NOTICE' : '공지사항이 ',
        'NOTICE_POINT' : '좌측으로 흘러갑니다.',
        'LOTTO_RESULT' : '開獎結果',
        'ANALYSIS' : '統計分析',
        'MEDIA_REPORTS' : '媒體報導',
        'YOUTUBE' : '開獎直播',
        'FACEBOOK' : '官方臉書',
        'MAP' : '尋找彩券行',
        'JACKPOT' : '頭獎',
        'SECOND_PRIZE' : '貳獎',
        '3RD_PRIZE' : '3등',
        '4TH_PRIZE' : '4등',
        '5TH_PRIZE' : '5등',
        '6TH_PRIZE' : '6등',
        '7TH_PRIZE' : '7등',
        '8TH_PRIZE' : '8등',
        '9TH_PRIZE' : '9등',
        'TENTH_PRIZE' : '10등',
        'BONUS_PRIZE' : '보너스',
        'EVENT_PRIZE' : '이벤트',
        'OTHER_AWARDS' : '其它獎項',
        'MILLION_PLUS_CODE' : '百萬加碼',
        'WINNER_LIST' : '中獎名單',
        'ANALYSIS_SYSTEM' : '分析系統',
        'STATISTICAL_DATA' : '統計資料',
        'BASIC' : '基本分析',
        'ADVANCE' : '高級統計',
        'DISTRIBUTION' : '號碼分布',
        'TAIL' : '尾',
        'MATCHING_NUM' : '相配數',
        'UN_MATCHING_NUM' : '不合數',
        'RECENTLY' : '最近',
        'NO_SHOW' : '期未出現',
        'ANNOUNCEMENT' : '公告',

        //---------Content Text-----------
        'FIGURE' : 'The Figures Inc.',
        'FORGOT_PW' : '忘記密碼',
        'GOOGLE_LOGIN' : 'Google帳號登入',
        'APPLE_LOGIN' : 'Apple帳號登入',
        'SEND_TEMPORARY_PW' : '我們將用簡訊發送臨時密碼',
        'RECEIVE_TEMPORARY_PW' : '接收臨時密碼',
        'EMAIL_JOIN' : '電子信箱註冊',
        'GOOGLE_JOIN' : 'Google帳號註冊',
        'APPLE_JOIN' : 'Apple帳號註冊',
        'TERMS' : '使用條款',
        'PRIVACY_POLICY' : '隱私權政策',
        'CONTINUE' : '繼續',
        '18+' : '18歲以上',
        'AGREE_TERMS' : '我同意以下條款',
        'AGREE_TERMS_MUST' : '同意使用條款 (必填) ',
        'PRIVACY_POLICY_MUST' : '同意隱私權政策 (必填)',
        'ACCUMULATED' : '目前頭獎累計金額', // 현재 누적 잭팟 금액
        'CAUTION_TEXT' : '派彩結果及中獎獎號以台彩公佈為準', // 복권 결과 및 당첨 번호는 대만 복권 발표에 따릅니다.

        'WINNING_SUB' : '最近10期中獎號碼 各期的概括性統計', // 지난 10개 문제의 당첨 번호 각 문제에 대한 요약 통계
        'AMOUNT_SUB' : '最近10期 各期中獎金額的統計', // 지난 10피리어드 중 각 피리어드의 당첨금액 통계
        'CONTINUOUS_SUB' : '最近10期 各期連續模式的統計', // 각 기간의 연속 모드 마지막 10개 기간의 통계
        'ODD_EVEN_SUB' : '最近10期單雙模式的統計', // 지난 10개의 단일 및 이중 패턴 통계
        'SIZE_SUB' : '關於最近10期大小模式的統計', // 최근 10개 이슈의 사이즈 패턴 통계
        'MANTISSA_SUB' : '最近10期 各期尾數模式的統計', // 지난 10개 기간 중 각 기간의 가수 패턴 통계
        'LIAN_SUB' : '最近10期 各期連莊模式的統計 (與前期號碼相同)', //기간별 연속 대리점의 최근 10개 기간의 통계(이전 기간과 동일한 수)
        'ADJACENT_SUB' : '最近10期 各期鄰近模式的統計 (與前期號碼相鄰)', // 각 기간의 인접 패턴의 마지막 10개 기간에 대한 통계(이전 번호에 인접)

        'QUALITY_SUB' : '對最近10期每期別之 質數-合成數-3倍數模式的統計',
        'SUM_SUB' : '最近10期 各期號碼加總的統計',
        'SUM_MANTISSA_SUB' : '最近10期 各期尾數加總的統計',
        'COOPERATE_SUB' : '在所有期別中 相配-不合數的統計',
        'NOT_COUNTED_SUB' : '每個號碼未出現次數的統計',
        'AC_SUB' : '最近10期 各期 間隔數-高低差-AC值 模式的統計',
        'FREQUENCY_SUB' : '在所有期別中 各號碼出現次數的統計',
        'FREQUENT_MANTISSA' : '最常出現的尾數',

        'DISTRIBUTION_SUB' : '最近10期 各期中獎號碼 在填寫用紙(選號單)上的分布統計',
        'LOGIN_ONLY_1' : '請在',
        'LOGIN_ONLY_2' : '登入',
        'LOGIN_ONLY_3' : '後接收富達號碼',
        'MEMBERSHIP_ONLY_1' : '本功能僅限',
        'MEMBERSHIP_ONLY_2' : '付費會員',
        'MEMBERSHIP_ONLY_3' : '瀏覽',
        'YOUTUBE_DESC_1' : '此為',
        'YOUTUBE_DESC_2' : '57彩券王',
        'YOUTUBE_DESC_3' : '的Youtube直播頻道',
        'SHOW_TIME' : '播出時間',
        'SHOW_TIME_NUMBER' : '週一至週六晚間8:30~9:00',
        'CAN_CHANGE_SCHEDULE' : '播出時間表依據官方可能會有所變更',
        'GOOD_LUCK' : '祝您中獎',


        //---------Alert Text-----------
        'LOADING' : 'Loading',
        'ENTER_EMAIL' : '請輸入電子信箱',
        'ENTER_PW' : '請輸入密碼',
        'ENTER_CELL_USED_JOIN' : '請輸入註冊時所使用的手機號碼',
        'ENTER_NICKNAME' : '請輸入暱稱 (暱稱應由1~10個中英文或數字組成)',
        'ENTER_PW_DESC' : '請輸入密碼 (密碼應為6~12個英文和數字之組合)',
        'RE_ENTER_PW' : '請再輸入一次密碼',
        'ENTER_CELL' : '請輸入電話號碼',
        'ENTER_C_NUM': '請輸入驗證號碼',
        'ONLY_18': '本服務僅限18歲以上者加入',
        'RECEIVE_C_NUM_4': '您將會收到4位數的驗證號碼',
        'MORE': 'MORE +',

        //---------index Text-----------
        'FIRST' : '第',
        'ISSUE' : '期',
        'YEAR' : '年',
        'MONTH' : '月',
        'DAY' : '日',
        'LOTTERY' : '開獎',
        'YUAN' : '元',
        'HOME' : '首頁',
        'FEED' : '最新消息',
        'CENTER' : '富達號碼',
        'MINI_GAME' : '搶紅包',
        'MY_PAGE' : '會員中心',
        'THOUSAND' : '萬',
        'MILLION' : '億',
        'RANK' : '位',
        'SINCE' : '自',
        'DATE' : '日期',
        'AWARDS' : '獎項',
        'BONUS' : '獎金',
        'USER_ID' : '暱稱',
        'VIEW' : '觀看次數',
        'FORM' : '表單',
        'MY_FUDA_NUM' : '我的富達號碼',
        'WAITING' : '等待開獎',
        'MAKE_QR' : '產生QR code',
        'DOWN' : '下載',
        'CHECKING' : '檢查',
        'WIN_RESULT' : '中獎成果',
        'WIN_RESULT_DESC' : '此處為搜尋期間的開獎結果與中獎金額',


        // modal
        'LOGIN_JOIN' : '登入 / 免費註冊',
        'NOT_NOW' : '暫時不要',
        'VVIP_MEMBER' : 'VVIP會員',
        'VIP_MEMBER' : 'VIP會員',
        'DIAMOND_MEMBER' : '鑽石會員',
        'SLIVER_MEMBER' : '白銀會員',
        'LIMIT_SALE' : '限時折扣',
        'PROVINCE' : '現省',
        'BEST_VALUE' : '最超值 !',
        'NO_SHOW_FOR_A_DAY' : '一天內不要再提醒我',
        'I_WANT_SALE' : '我想要限時折扣 !',
        'WILL_END_MEMBERSHIP' : '您的會籍即將結束，',
        'BUY_TIME_SALE' : '立即搶購您專屬的',
        'TIME_SALE' : '限時優惠！',
        'TRIAL_DESC' : '如您選擇不要，將以一般會員權限繼續使用，\n' +
            '並於每週收到2次\n' +
            '各3組的大樂透與今彩539預測號碼。',
        'CONTINUE_RECEIVE_NUM' : '想要繼續收到預測號碼嗎？',
        'WANT' : '我想要',
        'PREV_PAGE' : '前一頁',
        'NEXT_PAGE' : '下一頁',
        'WELCOME' : '歡迎來到',
        'MY' : '您專屬的',
        'FUDA_NUM' : '富達號碼',
        'RECEIVE_NUM' : '請接收富達樂透的',
        'PUSH_ALARM' : '推播通知',


        'WELCOME_DESC_1' : '您將享有7天VIP會員試用權限，\n' +
            '免費獲得 大樂透、威力彩、今彩539的預測號碼，\n' +
            '預祝您中大獎！',
        'WELCOME_DESC_2' : '您可以在「富達號碼」中\n' +
            '檢視您收到的預測號碼。',
        'WELCOME_DESC_3' : '您將可以及時收到\n' +
            '最新的開獎結果與預測號碼。',


        //---------Analytics basic Text-----------
        'WINNING_S' : '中獎',
        'AMOUNT_S' : '金額',
        'CONTINUOUS_S' : '連續',
        'ODD_EVEN_S' : '單雙',
        'SIZE_S' : '大小',
        'MANTISSA_S' : '尾數',
        'LIAN_S' : '連莊',
        'ADJACENT_S' : '鄰近',

        'WINNING_L' : '中獎統計',
        'AMOUNT_L' : '金額統計',
        'CONTINUOUS_L' : '連續號碼',
        'ODD_EVEN_L' : '單雙號碼',
        'SIZE_L' : '大小號碼',
        'MANTISSA_L' : '尾數統計',
        'LIAN_L' : '連莊號碼',
        'ADJACENT_L' : '鄰近號碼',

        //---------Analytics advance Text-----------
        'QUALITY_S' : '質合',
        'SUM_S' : '總和',
        'SUM_MANTISSA_S' : '尾和',
        'COOPERATE_S' : '配合',
        'NOT_COUNTED_S' : '未出',
        'AC_S' : 'AC值',
        'FREQUENCY_S' : '頻率',

        'QUALITY_L' : '質-合-3',
        'QUALITY_XL' : '質數 - 合成數 - 3倍數',
        'SUM_L' : '合計',
        'SUM_MANTISSA_L' : '尾數合計',
        'COOPERATE_L' : '相配-不合數',
        'NOT_COUNTED_L' : '未出數',
        'AC_L' : '間-高-A',
        'FREQUENCY_L' : '出現頻率',

        'REPEAT_MANTISSA' : '重複尾數',
        'APPEARANCE_MODE' : '出現模式',
        'CONTINUOUS_NUM' : '連號',
        'NOT' : '無',
        'ODD' : '單',
        'EVEN' : '雙',
        'SMALL' : '小',
        'BIG' : '大',
        'PRIME' : '質數',
        'COMPOSITE' : '合成數',
        'MULTIPLES3' : '3倍數',
        'INTERVAL_NUM' : '間隔數結構',
        'HEIGHT_DIFF' : '高低差(間隔數合計)',




        //----- not classification---------
        'ALL':'全部',
        'OFFICIAL':'官方新聞',
        'FUDANEWS':'富達新聞',
        'EVENT':'富達活動',
        'RESULT':'開獎結果',
        'WINNER':'中獎者專訪',
        'WINNERSHARE':'中獎分享',
        'WISHBOARD':'許願池',
        'MAIL':'信箱',

        'VIP_DATE':'VIP會員期間',
        'SHOP' :'商城',
        'FUDA_COIN': 'FC',
        'EXCHANGE': '兌換',

        'TOTAL_WIN':'總中獎次數',

        'DAILY_LOTTO': '今彩539',
        'BIG_LOTTO': '大樂透',
        'SUPER_LOTTO': '威力彩',

        'SET_GOAL': '設立目標',

        'ACCOUNT_SETTING': '帳號設定',
        'NOTIFICATION_SETTING': '通知設定',
        'PAYMENT_SETTING': '付款資訊',
        'LOGIN_SETTING': '登陸兌換券',
        'UNIFORM_INVOICE': '統一發票',
        'COMMON_PROBLEM': '常見問題',
        'DIRECT_SOLUTION': '一對一諮詢',

        'SCAN_NUMBER':'掃描對獎',
        'MAKE_SCAN' :'對獎紀錄',

        //----- analytics info modal---------
        // ContinuousPerIssue.js
        'CONSECUTIVE_NUM' : '連號', // 연속 숫자
        'PAIR_CONSECUTIVE_NUM' : '對連號', // 연속 숫자 쌍
        'SIMPLE_CONSECUTIVE_NUM' : '(簡單連號)', // 간단한 하이픈
        'CONSECUTIVE_PATTERN_2' : '出現連續號碼的模式', // 연속된 숫자가 나타나는 패턴
        'CONSECUTIVE_PATTERN_3' : '出現3個連續號碼的模式', // 3개의 연속된 숫자가 나타나는 패턴
        'DIFF_NUM_CONSECUTIVE_PATTERN' : '出現不同的2對連續號碼的模式', // 서로 다른 두 쌍의 연속 숫자가 나타나는 패턴
        'CONSECUTIVE_PATTERN_23' : '簡單連號和3連續號碼的組合模式', // 단순 연속 숫자와 3개의 연속 숫자의 조합 패턴
        'CONSECUTIVE_PATTERN_4' : '出現4個連續號碼的模式', // 4개의 연속된 숫자가 나타나는 패턴

        // QualityPerIssue.js
        'PRIME_NUM_DESC' : '只有1跟自己本身可以整除的數', // 1만이 자기 자신으로 나누어 떨어지는 수
        'MULTIPLES3_NUM_DESC' : '可以被3整除的數, 但3歸於質數', // 3의 배수
        'COMPOSITE_NUM_DESC' : '除了質數與3倍數以外的數', // 합성수

        // SumNumberPerIssue.js
        'SUM_WINNING_NUM' : '開出獎號之加總', // 당첨된 숫자의 합
        'SUM_MANTISSA_WINNING_NUM' : '每個號碼的尾數之加總', // 각 숫자의 가수의 합

        // UncombinePerIssue.js
        'MATCHING_NUM_DESC' : '經常出現在一起的配對號碼', // 자주 함께나타나는 수
        'UN_MATCHING_NUM_DESC' : '很少出現在一起的號碼', // 드물게 함께나타나는 수

        // ACvaluePerIssue.js
        'DIFF_NUM' : '間隔數', // 간격수
        'DIFF_NUM_DESC' : '表示相互鄰近號碼之間的差異', // 서로 인접한 숫자 간의 차이를 나타냄
        'HEIGHT_DIFF_NUM' : '高低差', // 서로 인접한 숫자 간의 차이를 나타냄
        'HEIGHT_DIFF_NUM_DESC' : '最高號與最低號之間的差異', // 가장 높은 숫자와 가장 낮은 숫자의 차이
        'AC_DESC_1' : '找尋每個號碼的差異來確定組合', // 조합을 결정하기 위해 각 숫자의 차이를 찾으십시오
        'AC_DESC_2' : '並判斷組合結構複雜性的指標', // 그리고 조합 구조의 복잡성 지수를 판단
        'AC_DESC_3' : '(計算方式請參見相關內容)', // (계산방법은 관련내용 참조)


        // analytics info
        'FUDA_THEORETICAL_FOOTHOLD' : '富達樂透的理論立足點', // Fuda lotto의 이론적 기반
        'MODEL_COMBINATION' : '活用組合特徵的富達模式', // 조합 기능을 활용한 충실도 모델
        // 1페이지 model desc
        'PAGE_1_DESC_1_1' : '大樂透組合的特徵是從49個數字中選擇6個, 並選取的幾何6個數字被稱為組合, (例如：1-3-14-15-24-35)',
        'PAGE_1_DESC_1_2' : '大樂透可透過多樣的分類基準來進行組合分 類， 而根據某些一致的特徵所分類的 組合則 稱之為結構模式。',
        'CATEGORY' : '類別。',
        'COMBINATION' : '組合。',
        'STR_PATTERN' : '結構模式。',
        'PAGE_1_DESC_3' : '將各組合的出現型態以相同的條件類別進行分組，而產生之結構，稱為富達模式。',
        // 1페이지
        'BINOMIAL_DISTRIBUTION' : '二項式分布', // 이항 분포
        'PAGE_1_DESC_2_1' : '樂透抽獎時，每期並沒有聯關性， 但當有累積之情況時，其原理為二項式分布。二項式分布是指當成功率為p，失敗率為1-p時，獨立反覆進行n遍後的實際分布狀況。',
        'PAGE_1_DESC_2_2' : '富達樂透中的中獎事件是在獨立進行， 且所有組合的中獎機率皆相同的大前提下開始的。 當樂透的獨立進行開始重複時，「實際分布」將會 出現，而透過此現象，我們將可以發現 「理論期望值」和「實際出現值」之間的差異。 富達樂透的分析系統是透過分析「理論期望值」和 「實際出現值」的差異，進而分析出最佳組合的系統。',
        'LOTTO_100' : '大樂透100期開獎時',
        'GRAPH' : '針對各號碼出現的二項分佈圖表',









    }

    return tw;
}
