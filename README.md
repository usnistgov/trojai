# TrojAI
## Trojans in Artificial Intelligence

Using current machine learning methods, an artificial intelligence (AI) is trained on data, learns relationships in that data, and then is deployed to the world to operate on new data. For example, an AI can be trained on images of traffic signs, learn what stop signs and speed limit signs look like, and then be deployed as part of an autonomous car. The problem is that an adversary that can disrupt the training pipeline can insert Trojan behaviors into the AI. For example, an AI learning to distinguish traffic signs can be given just a few additional examples of stop signs with yellow squares on them, each labeled “speed limit sign.” If the AI were deployed in a self-driving car, an adversary could cause the car to run through the stop sign just by putting a sticky note on it. The goal of the TrojAI program is to combat such Trojan attacks by inspecting AIs for Trojans. This page is a list of resources for doing research on detecting Trojan attacks, including a leaderboard for Trojan detectors, code to create AIs with/without Trojans at scale, etc.

## Links
- [TrojAI Leaderboard](https://pages.nist.gov/trojai/)
- [Leaderboard Documentation](https://pages.nist.gov/trojai/docs/index.html)
- [Leaderboard Data Downloads](https://pages.nist.gov/trojai/docs/data.html)
   + [Round 0](https://data.nist.gov/od/ds/ark:/88434/mds2-2175/trojai-round0-dataset.tar.gz) ([SHA256](https://data.nist.gov/od/ds/ark:/88434/mds2-2175/trojai-round0-dataset.tar.gz.sha256))
- [Leaderboard Submission Example](https://github.com/usnistgov/trojai-example)
- [Code to generate AIs with/without Trojans](https://github.com/trojai)
<!--- [AI Generation Code Example]()
- [Leaderboard Code]()
- [Test Harness Code]()
--->
