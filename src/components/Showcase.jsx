import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Showcase = ({workList}) => {
    return (
        <Box display='flex' mt={2} flexDirection='column' alignItems='center' justifyContent='center'>
            <ImageList variant="masonry" gap={8} rowHeight={200} >
                {workList.map((work) => { 
                    const cols = work.featured ? 2 : 1
                    const rows = work.featured ? 2 : 1

                    return (
                        <ImageListItem key={work.id} cols={cols} rows={rows}>
                            <img
                                {...srcset(work.path, 250, 200, rows, cols)}
                                alt={work.title}
                                loading="lazy"
                            />
                            <ImageListItemBar 
                                sx={{
                                    background:
                                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                  }}
                                  title={work.title}
                                  position="top"
                                  actionIcon={
                                    <>
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${work.title}`}
                                            onClick={() => window.open(work.repo, '_blank')}
                                        >
                                            <GitHubIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`star ${work.title}`}
                                            onClick={() => window.open(work.link, '_blank')}
                                        >
                                            <OpenInNewIcon />
                                        </IconButton>
                                    </>
                                  }
                                  actionPosition="left"
                            />
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Box>
    )
}

export default Showcase