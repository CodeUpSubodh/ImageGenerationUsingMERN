import React, { useState, useEffect } from "react"
import { Loader, FormField, Card } from "../components";

  const RenderCard=({data,title})=>{
    if(data?.length>0){
      return data.map((post)=><Card key={post._id}{...post}/>)
    }
    
      return(
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
      )
    
  }
  
  const Home = () => {
    const [loading, setloading] = useState(false);
    const [allPost, setAllPost] = useState(null);
    const [searchText, setsearchText] = useState('');


    return (
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text=[#222328] text-[32px]">The Community Showcase</h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w-auto">Browse through a collections of imigination and visually stunning images generates by Image Generation</p>
        </div>
        <div className="mt-16">
          <FormField />

        </div>
        <div className="mt-10">
          {
            loading ? (
              <div className="flex justify-center items-center"> <Loader />
              </div>
            ) : (
              <>
                {searchText && (
                  <h2 className="font-medium text-[#666e75] text-xl mb-3">Shwoing result for <span className="text-[#222328]">{searchText}</span></h2>
                )}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                  {searchText ?  (
                    <RenderCard
                      data={[]}
                      title="No search result found"
                    />
                  ) : (
                    <RenderCard
                      data={[]}
                      title="No post found"
                    />
                  )}
                </div>
              </>
            )
          }
        </div>
      </section>
    )
  }

  export default Home;
