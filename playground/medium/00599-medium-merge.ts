/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #보통 #object

  ### 질문

  두개의 타입을 새로운 타입으로 병합하세요.
  두번째 타입의 Key가 첫번째 타입을 덮어씁니다(재정의합니다)

  예시:

  ```ts
  type foo = {
    name: string
    age: string
  }
  type coo = {
    age: number
    sex: string
  }

  type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
  ```

  > GitHub에서 보기: https://tsch.js.org/599/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type ObjectToTuple<T> = {
  [K in keyof T]: T[K];
} extends { [key: number]: infer V } ? V[] : never

// 객체 타입의 프로퍼티 값을 튜플로 변환하는 유틸리티 타입
type ObjectToTuple2<T> = { [K in keyof T]: T[K] } extends infer U ? U[keyof U][] : never

// Foo 타입을 튜플로 변환
type FooTuple = ObjectToTuple2<Foo>

type Merge<F, S> = { [K in keyof(F & S)]: K extends keyof S ? S[K] : (F & S)[K] }

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/599/answer/ko
  > 정답 보기: https://tsch.js.org/599/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
