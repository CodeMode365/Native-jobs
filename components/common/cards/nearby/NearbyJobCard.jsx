import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils/index"
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {

  return (
    <TouchableOpacity style={styles.container}
      onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{
          uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LqVgQ66ZHzta2fMiEW8sJgHaE8%26pid%3DApi&f=1&ipt=297097010ac57d22df8e8aa08b6b9dc689e4f2453f389b8e511561a0a6ae00e3&ipo=images"
        }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}><Text style={styles.jobType}>{job.job_employment_type}</Text>
        <Text style={styles.jobName}>{job.job_title}</Text>
        <Text style={styles.location}>{job.job_country}</Text></View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard