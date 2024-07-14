import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
    profileImage: IGatsbyImageData
}

const PROFILE_IMAGE_LINK =
    'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp'

// const ProfileImageWrapper = styled.img`
//     width: 120px;
//     height: 120px;
//     margin-bottom: 30px;
//     border-radius: 50%;

//     @media (max-width: 768px) {
//       width: 80px;
//       height: 80px;
//     }
//   `

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
    profileImage,
}) {
    return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage