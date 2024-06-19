import { useState, useRef } from "react";
import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic to navigate to the next song
    console.log("Next song");
  };

  const handlePrevious = () => {
    // Logic to navigate to the previous song
    console.log("Previous song");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Music Streaming Service</Heading>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Welcome to the best music streaming service. Enjoy unlimited music, curated playlists, and more.
        </Text>
        <VStack spacing={4} direction="row" align="center">
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid" onClick={handlePrevious}>
            Previous
          </Button>
          <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} colorScheme="teal" variant="solid" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid" onClick={handleNext}>
            Next
          </Button>
        </VStack>
        <Link to="/create-playlist">
          <Button colorScheme="teal" variant="outline" mt={4}>Create Playlist</Button>
        </Link>
      </VStack>
    <audio ref={audioRef} src="/path/to/your/song.mp3" />
    </Container>
  );
};

export default Index;