import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function Box1() {
    return (
        <Box
            sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                borderRadius: '24px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div >
                <Stack direction='row'>
                    <Box
                        sx={{
                            mt: 1,
                            ml: 2,
                            bgcolor: '#fff',
                            height: '50vh',
                            width: '50%',
                            border: '1px solid black',
                            borderRadius: '24px'
                        }}>
                        프로필 사진
                    </Box>
                    <Stack sx={{

                    }}>

                        <Box sx={{
                            mt: 1,
                            ml: 1,
                            mr: 1,
                            bgcolor: '#fff',
                            height: '10vh',
                            width: '100%',
                            border: '1px solid black',
                            borderRadius: '24px'
                        }}>
                            유튜브 뷰카운트
                        </Box>
                        <Box sx={{
                            mt: 1,
                            ml: 1,
                            mr: 1,
                            bgcolor: '#fff',
                            height: '10vh',
                            width: '100%',
                            border: '1px solid black',
                            borderRadius: '24px'
                        }}>
                            감성분석
                        </Box>
                        <Box sx={{
                            mt: 1,
                            ml: 1,
                            mr: 1,
                            bgcolor: '#fff',
                            height: '25vh',
                            width: '100%',
                            border: '1px solid black',
                            borderRadius: '24px'
                        }}>
                            트렌딩 키워드
                        </Box>
                    </Stack>

                </Stack>
                {/* <Stack> */}
                <Box sx={{
                    mt: 1,
                    ml: 2,
                    mr: 2,
                    bgcolor: '#fff',
                    height: '30vh',
                    width: '80%',
                    border: '1px solid black',
                    borderRadius: '24px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    아티스트 보드
                </Box>
                {/* </Stack> */}
            </div>
        </Box>
    )
}

