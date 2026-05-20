# Git 상태 및 MCP 정리

- 현재 브랜치: `master`
- 현재 `git status` 결과: 변경 사항 없음, 작업 트리 깨끗함
- 추적되지 않은 파일: 없음

## MCP란

- MCP는 `Model Context Protocol`의 줄임말입니다.
- AI가 외부 도구, 리소스, 파일, 서비스와 연결할 때 쓰는 표준 방식입니다.
- 예를 들면 MCP 서버를 통해 파일, 데이터베이스, 문서 같은 정보를 읽을 수 있습니다.

## Git 상태를 읽을 때 사용한 도구

- 이번 작업에서는 MCP를 사용하지 않았습니다.
- 사용한 도구: `functions.shell_command`
- 사용한 명령: `git status --short`, `git status --branch --short`

## 확인 결과

- 현재 프로젝트는 커밋되지 않은 변경 사항이 없는 상태입니다.
- 브랜치는 `master` 입니다.
