/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #보통 #template-literal

  ### 질문

  `camelCase`나 `PascalCase`를 `kebab-case` 문자열로 수정하세요.

  `FooBarBaz` -> `foo-bar-baz`

  예시:

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > GitHub에서 보기: https://tsch.js.org/612/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type KebabCase<S extends string, IsFirstChar extends boolean = true> =
  S extends `${infer First}${infer Rest}`
    ? First extends Lowercase<First>
      ? `${First}${KebabCase<Rest, false>}`
      : IsFirstChar extends true
        ? `${Lowercase<First>}${KebabCase<Rest, false>}`
        : `-${Lowercase<First>}${KebabCase<Rest, false>}`
    : S

  type KebabCase2<S extends string> = S extends `${infer S1}${infer S2}`
    ? S2 extends Uncapitalize<S2>
      ? `${Uncapitalize<S1>}${KebabCase<S2>}`
      : `${Uncapitalize<S1>}-${KebabCase<S2>}`
    : S
/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type a = KebabCase2<'FooBarBaz'>
type b = KebabCase2<'ABC'>
type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/612/answer/ko
  > 정답 보기: https://tsch.js.org/612/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
