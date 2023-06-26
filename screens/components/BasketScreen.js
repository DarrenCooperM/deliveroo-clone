import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../features/restaurantSlice";
import { selectBasketItems } from "../../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";

const img =
  "https://plus.unsplash.com/premium_photo-1667545168921-34f756495d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
    });
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: { img },
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View key={key}>
                <Text>{items.length} x</Text>
                {items[0]?.image ? (
                  <Image
                    source={{
                      uri: urlFor(items[0]?.image).url(),
                    }}
                    className="h-12 w-12 rounded-full"
                  />
                ) : (
                  <Text>No image</Text>
                )}
                <Text className="flex-1">{items[0]?.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
