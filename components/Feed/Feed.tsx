import { MiniProfile, Posts, Stories, Suggestions } from ".."
import { IFeedProps } from "../../typescript/components/feed.types"

const Feed: React.FC<IFeedProps> = (props) => {

  return (
    <main className={`grid grid-cols-1 
      md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl
      mx-auto ${!props.username && "!grid-cols-1 !max-w-3xl"}`}>
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed">
          {
            props.username && (
              <>
                <MiniProfile username={props.username} />
                <Suggestions />
              </>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Feed
