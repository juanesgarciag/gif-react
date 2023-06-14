import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"])

  const onAddCategory = (value) => {
    const categoriesToLower = categories.map((category) =>
      category.toLowerCase()
    )
    if (categoriesToLower.includes(value.toLowerCase())) return
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      ></AddCategory>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
