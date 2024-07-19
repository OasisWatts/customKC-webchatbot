# piazza-web-f

## 노트
- next.js는 SSR을 위한 프레임 워크이다.
- next.js는 백엔드를 대체할 수 있다. 자체 서버 코드가 있다.
- 그럼에도 나는 piazza-web-b 백엔드 코드를 작성하고, 2개 서버 체제로 돌린다.
- 리노드 서버에는 tmux에 총 두 개 서버가 돌아가고 있다.

## 설정 방법
#### 도메인 구매 / 서버 생성 후, 연결 방법
- 도메인 서버쪽에 A record를 생성 (호스트 이름으로 @, www 두 개 생성)
- 클라우드 서버에 ssl 인증 받기
    - conf.d/?.conf 파일에서 80port로 리슨하고 next.js 서버 포트로 디렉팅하는 코드를 넣는다
    - snap으로 certbot을 다운 받고, certbot --nginx -d 도메인.이름 -d www.도메인.이름 명령어로, 인증서 생성 및 .conf 파일 자동 반영한다
- 방화벽 뚫어주기 (ssh 도 뚫어져야함 -> 다시 서버에 접속 못하는 경우 주의)
- 참고: https://velog.io/@tlqhrm/Ubuntu-22.04%EC%97%90%EC%84%9C-Nginx%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%AC%B4%EB%A3%8C-Https-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

## 노트2
- piazzabrowser.com은 CNAME record로 piazza.run을 가지고 있다.
- nginx에서 piazza.run을 piazzabrowser.com으로 redirect한다.
- 각각 ssl certification이 있다.# customKC-webchatbot
