import TagButton from "./TagButton";

export default function SideMenu() {
  const buttonPost =[
    {
      id:1,
      titel:"اخر المقالات",
      c:(
        <div>
          <span>"looooooo"</span>
        </div>
      )

    },
    {
      id:2,
      titel:"اخر المقالات"
    },
  ]
  const listButton = buttonPost.map((butn)=>{
    return (
    <TagButton key={butn.id} titel={butn.titel}>
      {butn.c}
    </TagButton>
    )
  })

  return (
    <div style={{ border: "solid teal 5px" }}>

{listButton}
     
    </div>
  );
}
