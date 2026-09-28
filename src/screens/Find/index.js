import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const pages = [
  { id: "1", color: "pink", text: "Page1: Open up App.js to start working on your app!" },
  { id: "2", color: "olive", text: "Page2: Changes you make will automatically reload." },
  { id: "3", color: "lightblue", text: "Page3: Shake your phone to open the developer menu." }
];

export default function Find() {
  const [height, setHeight] = useState(0);

  return (
    <View
      style={styles.container}
      onLayout={event => setHeight(event.nativeEvent.layout.height)}
    >
      {height > 0 && (
        <FlatList
          data={pages}
          keyExtractor={page => page.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={[
                styles.page_container,
                { height, backgroundColor: item.color }
              ]}
            >
              <Text>{item.text}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page_container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
