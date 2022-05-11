/**
 * https://developer.mozilla.org/ko/docs/Web/HTTP/Status
 */

module.exports = {
    OK : 200,
    CREATED : 201, //새로운 데이터 생성됨
    ACCEPTED : 202,
    // NO_CONTENT : 204,


    BAD_REQUEST : 400, //파라메터 잘못된 경우 ( 잘못된 요청 )
    UNAUTHORIZED : 401,  //인증이 안된 경우 ( ex. 토큰 만료 )
    FORBIDDEN : 403, // 현재 유저가 사용 할 수 없는 기능을 요청 ( free, vip 권한 )



    NOT_FOUND : 404,
    NOT_ALLOWED : 405,
    // CONFLICT : 409,
    TOO_MANY_REQUEST : 429,


    SERVER_ERROR : 500
}


