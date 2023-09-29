import React from 'react'
import image from "./image.jpg"
export default function Sidecard() {
  return (
    <div className='mr-8' >
      <p className='text-xl'>Sidecard</p>
      <img src={image} className='sideimages mt-5 mr-5'></img>
          <p className=" font-mainfont mt-5 auth">Gurjot Singh</p>
          <p className="font-mainfont auth">March 12 2023</p>
          <div className='sidecontent mt-5'>
            <p className=''>
                  The founder of computer science, Alan Turing, stated in 1947 that before the end of the century, the usage of words and general informed opinion would have shifted so much that one could speak about machines thinking without expecting to be disputed. It wouldn't be far-fetched to claim that he was correct. Because of the nature of discovery, where previously unthinkable things become commonplace, and the old gives way to the new, it is nearly incomprehensible.

                  The phrase "artificial intelligence" was first used in the 1950s, even though the idea of thinking machines is centuries old, if only in mythology and legends. Since then, artificial intelligence technology has advanced and changed in several ways, much like its applications.

                  The study of neural networks dominated the history of artificial intelligence from the 1950s to the 1970s; machine learning applications began to emerge in the next three decades, from the 1980s to the 2010s. Machine learning has given birth to the more nuanced idea of Deep Learning due to constant study, increased interest, and broad application. Additionally, with new chapters opening up every year, the initial research into AI's leap into the unknown has evolved into more of a leap of faith.

            </p>
          </div>

    </div>
  )
}
