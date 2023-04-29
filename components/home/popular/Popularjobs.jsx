import { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router"
import styles from './popularjobs.style'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import { COLORS, SIZES } from '../../../constants'
import useFetch from "../../../hook/useFetch"

const Popularjobs = () => {
  const router = useRouter()
  const query = 'React Developer'

  const fetchData = useCallback(() => useFetch('search', {
    query: query,
    num_pages: 1
  }), [query])

  const { data, isLoading, error } = fetchData()

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    router.push(`job-details/${item.job_id}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size={SIZES.medium} />
        ) ? error : (<Text>Something went Wrong!</Text>) : (
          <FlatList
            data={[...data]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} handleCardPress={handleCardPress}/>
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />)}
      </View>
    </View>
  )
}

export default Popularjobs