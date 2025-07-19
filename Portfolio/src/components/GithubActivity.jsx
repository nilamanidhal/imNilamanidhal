import GitHubCalendar from 'react-github-calendar';

function GithubActivity() {
  return (
    <div className="flex justify-center mt-4">
      <GitHubCalendar
        username="nilamanidhal"
        colorScheme="dark"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}

export default GithubActivity;