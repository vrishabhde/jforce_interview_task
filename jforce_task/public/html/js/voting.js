let candidate1Count = 0;
let candidate2Count = 0;

function updateCandidateCount(candidateNumber) {
  if (candidateNumber === 1) {
    document.getElementById('candidate1Count').innerText = candidate1Count;
  } else if (candidateNumber === 2) {
    document.getElementById('candidate2Count').innerText = candidate2Count;
  }
}

function voteCandidate(candidateNumber) {
  if (candidateNumber === 1) {
    candidate1Count++;
  } else if (candidateNumber === 2) {
    candidate2Count++;
  }
  
  updateCandidateCount(candidateNumber);
}