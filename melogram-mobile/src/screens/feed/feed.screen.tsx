import {
  View,
  Text,
  HStack,
  Icon,
  IconButton,
  FlatList,
  Box,
  Avatar,
  VStack,
  Spacer,
} from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import { RefreshControl, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderComponent from "../../components/header/header.component";
import { useCallback, useState } from "react";
import { dummyPostData } from "../../config/dummy";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import { HEADER_HEIGHT } from "../../config/constants";
import Constants from "expo-constants";

export default function FeedScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const { height } = Dimensions.get("window");
  const statusBarHeight = Constants.statusBarHeight;
  const listHeight = height - tabBarHeight - HEADER_HEIGHT - statusBarHeight;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent title={"Your Feed"} />
      <View paddingLeft={5} paddingRight={5}>
        <FlatList
          showsVerticalScrollIndicator={false}
          height={listHeight}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="white"
            />
          }
          data={dummyPostData}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
