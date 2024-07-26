import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <ul>
          <HeroList publisher = 'DC Comics' />
      </ul>
    </>
  )
}
