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
  Image,
  Heading,
  Skeleton,
} from "native-base";
import {
  darkModeBackgroundColor,
  darkModePostBackgroundColor,
} from "../../styles/theme";
import { RefreshControl, SafeAreaView, TouchableOpacity } from "react-native";
import { useCallback, useState } from "react";
import { dummyPostData } from "../../config/dummy";
import IconButtonComponent from "../../components/shared/icon-button/icon-button.component";
import { IconLibraryType } from "../../config/enums";
import * as Helpers from "../../helpers/helpers";
import HeaderComponent from "../../components/shared/header/header.component";

export default function FeedScreen({ navigation }: { navigation: any }) {
  const listHeight = Helpers.getScrollViewHeight();

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
      <HeaderComponent navigation={navigation} title={"Your Feed"} />
      <View paddingLeft={5} paddingRight={5}>
        <FlatList
          showsVerticalScrollIndicator={false}
          height={listHeight}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
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
              borderRadius={10}
              width={"100%"}
              paddingBottom={2}
              bg={darkModePostBackgroundColor}
            >
              <HStack
                alignItems="center"
                paddingLeft={4}
                paddingTop={3}
                paddingRight={4}
              >
                <Avatar
                  marginRight={2}
                  size="48px"
                  source={{
                    uri: item.track.spotifyImageUrl,
                  }}
                />
                <VStack>
                  {/* <Skeleton h="10px" /> */}
                  <Text fontWeight={500}>{item.author.username}</Text>
                  <Text color="gray.500">2 hours ago</Text>
                </VStack>

                <IconButtonComponent
                  ml={"auto"}
                  iconSize="lg"
                  iconName="bookmark-outline"
                  iconNamePressed="bookmark"
                  iconLibrary={IconLibraryType.Ionicons}
                />
              </HStack>
              <Box
                justifyContent="center"
                alignItems="center"
                paddingTop={3}
                paddingLeft={3}
                paddingRight={3}
                width={"100%"}
                height={"350px"}
              >
                <Image
                  borderRadius={10}
                  source={{
                    uri: "https://api.floodmagazine.com/wp-content/uploads/2015/03/My_Morning_Jacket-2015-The_Waterfall-Cover_Art.jpg",
                  }}
                  alt="Alternate Text"
                  width="100%"
                  height="100%"
                />
              </Box>
              <VStack paddingTop={3} paddingLeft={5}>
                <Heading>The Waterfall Pt. II</Heading>
                <View style={{ flexDirection: "row" }}>
                  <Text color="gray.500">by </Text>
                  <Text color="gray.500"> </Text>
                  <Text fontWeight={500}>My Morning Jacket</Text>
                </View>
              </VStack>
              <HStack paddingLeft={3} paddingRight={5} flex={1}>
                <IconButtonComponent
                  iconSize="lg"
                  iconName="heart-outlined"
                  iconNamePressed="heart"
                  iconColorPressed="red.400"
                  iconLibrary={IconLibraryType.Entypo}
                />

                <View mr={2} style={{ justifyContent: "center" }}>
                  <Text color="gray.500">34</Text>
                </View>

                <IconButtonComponent
                  iconSize="lg"
                  iconName="chatbox-outline"
                  iconNamePressed="chatbox"
                  iconLibrary={IconLibraryType.Ionicons}
                />

                <View style={{ justifyContent: "center" }}>
                  <Text color="gray.500">12</Text>
                </View>

                <IconButtonComponent
                  marginLeft={"auto"}
                  iconSize="lg"
                  iconName="share-social-outline"
                  iconNamePressed="share-social"
                  iconLibrary={IconLibraryType.Ionicons}
                />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
