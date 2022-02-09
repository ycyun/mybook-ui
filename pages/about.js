import Layout from '../components/Layout';


const About = ({version}) => (
    <Layout>
        <h2>안녕하세요 저는 윤여천 입니다.</h2>
        version {version}
    </Layout>

)

About.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:8080/api/version')
    const json = await res.json()
    return { version: json.version }
}

export default About;