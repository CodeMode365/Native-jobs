import { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router"
import styles from './nearbyjobs.style'
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import { COLORS, SIZES } from '../../../constants'
import useFetch from "../../../hook/useFetch"

const Nearbyjobs = () => {
  const router = useRouter()
  const query = 'React Developer'
  const fetchData = useCallback(() => useFetch('search', {
    query,
    num_pages: 1
  }), [query])
  const { data, isLoading, error } = fetchData()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size={SIZES.medium} />
        ) ? error : (<Text>Something went Wrong!</Text>) : (
          data?.map((job) => (
            <NearbyJobCard job={job} key={`nearby-jon-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)} />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs