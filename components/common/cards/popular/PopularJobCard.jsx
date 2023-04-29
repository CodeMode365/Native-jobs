import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils/index"
import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{
          uri: checkImageURL(item.employer_logo) ? item.employer_logo : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LqVgQ66ZHzta2fMiEW8sJgHaE8%26pid%3DApi&f=1&ipt=297097010ac57d22df8e8aa08b6b9dc689e4f2453f389b8e511561a0a6ae00e3&ipo=images"
        }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}><Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text></View>
    </TouchableOpacity>
  )
}

export default PopularJobCard