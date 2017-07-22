const NewsLetter = ({ name, link }) => (
  <div>
    <p><a href={link} target="_blank">Subscribe</a> to the {name} newsletter to see more blog posts like this.</p>
    <style jsx>{`
      p {
        margin: 20px 0;
        padding: 15px 10px;
        background-color: #8BC34A;
        color: #FFF;
        font-size: 18px;
        text-align: center;
      }

      p a {
        color: #FFF;
        border-bottom-color: #FFF;
        font-weight: 600;
      }
    `}</style>
  </div>
)

export default NewsLetter
export const Cryptocurrency = () => (
  <NewsLetter name="cryptocurrency" link="https://tinyletter.com/cryptocurrency"/>
)