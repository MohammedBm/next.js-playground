import Link from 'next/link'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="hello Next.js"/>
      <PostLink id="lean-nextjs" title="Learn Next.js it's awesome"/>
      <PostLink id="depoly-nextjs" title="Deploy apps with Zeti"/>
    </ul>
  </Layout>
)
