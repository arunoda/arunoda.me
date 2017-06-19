import BlogLayout from '../../components/BlogLayout'
import posts from '../../posts'

const PostLink = ({ href, title, date }) => (
  <div id="post-link">
    <div className="date-mobile">{date}</div>
    <span className="date-desktop">{date}</span>
    <a href={href}>{title}</a>
    <style jsx>{`
      #post-link {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        margin: 10px 0;
        font-size: 18px;
      }

      .date-mobile {
        display: none;
        font-size: 12px;
        line-height: 12px;
      }

      .date-desktop {
        display: inline-block;
        width: 150px;
        text-align: right;
        padding-right: 30px;
      }

      a {
        color: #0288D1;
        text-decoration: none;
      }

      a:hover {
        color: #039BE5;
      }

      @media screen and (max-width: 650px) {
        #post-link {
          margin: 20px 0;
        }

        .date-desktop {
          display: none;
        }

        .date-mobile {
          display: block;
        }
      }
    `}</style>
  </div>
)

export default () => (
  <BlogLayout>
    <div id="post-list">
      {posts.map(post => (
        <PostLink
          key={post.slug}
          href={`/blog/${post.slug}`}
          title={post.title}
          date={post.date}
        />
      ))}
    </div>
    <style>{`
      #post-list {
        margin: 50px 0 0 0;
      }
    `}</style>
  </BlogLayout>
)
