import React, {useState, useEffect} from "react"
// import './App.css';



const App = () => {
  const [articles, setArticles] = useState([])
  const [term] = useState('everything')
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
    
    try {
      
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=Vj4oGWsCIAhg4NGDal4GS1FxpHnrtRej`
        )
       
 
        
        const articles = await res.json()
        console.log(articles.response.docs)
        setArticles(articles.response.docs)
      
    
    
    }catch (error) {
      console.error(error);
    }
  }
    fetchArticles()

}, [term]) 


  
  return (
    <>
     <section>
       {articles.map((article) => {
         const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = article

        return(
          <article key={_id}>
            <h2>{main}</h2>
            <h4>{abstract}</h4>
            <a href={web_url} target rel="_blank">Web Resource</a>
            <p>{lead_paragraph}</p>
            <ul>
              <li>{original}</li>
            <li>{news_desk}</li>
              <li>{section_name}</li>
              <li>{word_count}</li>
            </ul>


          </article>
        )

       })}
     </section>

    </>
  )
}

export default App
