import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const img =
  "https://images.unsplash.com/photo-1610478920409-ec0f58e881a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* category card  */}
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
      <CategoryCard imgUrl={img} title="Testing " />
    </ScrollView>
  );
};

export default Categories;
