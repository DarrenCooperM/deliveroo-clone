import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const img =
  "https://plus.unsplash.com/premium_photo-1667545168921-34f756495d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <RestaurantCard
          id={id}
          imgUrl={img}
          title="Yo! Sushi"
          rating={(4, 5)}
          genre="Japanese"
          address="123, Fake Street, London"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options, Gluten Free Options"
          dishes={[]}
          long={-0.1277583}
          lat={51.5073509}
        />
        <RestaurantCard
          id={id}
          imgUrl={img}
          title="Yo! Sushi"
          rating={(4, 5)}
          genre="Japanese"
          address="123, Fake Street, London"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options, Gluten Free Options"
          dishes={[]}
          long={-0.1277583}
          lat={51.5073509}
        />
        <RestaurantCard
          id={id}
          imgUrl={img}
          title="Yo! Sushi"
          rating={(4, 5)}
          genre="Japanese"
          address="123, Fake Street, London"
          short_description="Sushi, Japanese, Asian, Healthy, Vegetarian Friendly, Vegan Options, Gluten Free Options"
          dishes={[]}
          long={-0.1277583}
          lat={51.5073509}
        />
      </ScrollView>
    </View>
  );
}
