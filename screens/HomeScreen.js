import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import "react-native-url-polyfill/auto";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1610478920409-ec0f58e881a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 rounded-xl bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput
            placeholder="Restaraunts and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body  */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Components -- Categories */}
        <Categories />

        {/* featured rows  */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
