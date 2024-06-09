---
title: 'Nodejs의 구성'
metaTitle: 'Nodejs의 구성'
metaDescription: 'This is the meta description for this page'
---

# Node.js 아키텍처

Node.js의 아키텍처는 이벤트 기반 아키텍처로 고성능과 확장성을 유리한 설계를 가지고 있다. 주요 구성 요소로는 V8 엔진, Libuv, 이벤트 루프, 스레드 풀 등이 있습니다. 아래는 Node.js 아키텍처를 설명하는 Mermiad 다이어그램으로 그림 표이다.

```mermaid
graph TD;
    subgraph "Node.js Architecture"
        A1[V8 Engine] --> A2[Libuv]
        A2 --> A3[Event Loop]
        A2 --> A4[Thread Pool]
        A3 --> A5[Non-blocking I/O Operations]
        A3 --> A6[Timers]
        A3 --> A7[Callbacks]
        A3 --> A8[Next Tick Queue]
        A4 --> A9[Blocking I/O Operations]
        A4 --> A10[DNS Lookups]
    end

    subgraph "Application Layer"
        B1[JavaScript Code]
        B2[NPM Modules]
        B3[Node Bindings]
    end

    subgraph "Native Layer"
        C1[Native Code (C/C++)]
        C2[Node API (N-API)]
    end

    B1 --> A1
    B2 --> A1
    B3 -.-> C1
    C1 -.-> C2
    C2 -.-> A1

    A1 -.-> A2
    A2 -.-> A3
    A2 -.-> A4
    A3 -.-> A5
    A3 -.-> A6
    A3 -.-> A7
    A3 -.-> A8
    A4 -.-> A9
    A4 -.-> A10

    subgraph "Libuv Components"
        A2 -.-> A11[Asynchronous I/O]
        A2 -.-> A12[Event Loop Queue]
        A2 -.-> A13[Thread Pool Tasks]
    end
```

## 설명

### Node.js Architecture

- **V8 Engine**: 자바스크립트 코드를 컴파일하고 실행합니다.
- **Libuv**: 비동기 I/O를 지원하는 라이브러리로, 이벤트 루프와 스레드 풀을 제공합니다.
- **Event Loop**: 비동기 작업을 처리하고 콜백을 실행합니다.
- **Thread Pool**: 주로 파일 시스템 작업과 같은 블로킹 I/O 작업을 처리합니다.
- **Non-blocking I/O Operations**: 비동기적으로 처리되는 I/O 작업들입니다.
- **Timers**: `setTimeout`, `setInterval`과 같은 타이머 기능을 처리합니다.
- **Callbacks**: 비동기 작업이 완료되면 호출되는 함수들입니다.
- **Next Tick Queue**: `process.nextTick`을 통해 예약된 작업들을 처리합니다.
- **Blocking I/O Operations**: 파일 시스템 작업과 같은 블로킹 I/O 작업들입니다.
- **DNS Lookups**: 도메인 이름 시스템 조회 작업입니다.

### Libuv Components

- **Asynchronous I/O**: 비동기 I/O 작업을 처리합니다.
- **Event Loop Queue**: 이벤트 루프 큐로 작업들을 처리합니다.
- **Thread Pool Tasks**: 스레드 풀로 블로킹 작업들을 처리합니다.

### Application Layer

- **JavaScript Code**: 애플리케이션의 주요 로직이 작성된 자바스크립트 코드입니다.
- **NPM Modules**: Node.js 패키지 관리자(NPM)를 통해 설치된 모듈들입니다.
- **Node Bindings**: C/C++로 작성된 네이티브 코드와 상호작용하기 위한 바인딩입니다.

### Native Layer

- **Native Code (C/C++)**: 고성능 또는 시스템 레벨의 기능을 제공하기 위해 C/C++로 작성된 코드입니다.
- **Node API (N-API)**: 네이티브 모듈이 Node.js와 상호작용하기 위한 API입니다.
