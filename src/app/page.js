import Image from 'next/image'

export default function Home() {
 
  const objetos = [ 
    {name : "Malcom", age: 15},
    {name : "Kaylee", age: 14},
    {name : "Jayne", age: 12}
  ];

  function getObjeto(item) {
    return <li key={item.name}>{[item.name,item.age].join(" ")}</li>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {objetos.map(getObjeto)}
      </ul>
    </main>
  )
}
