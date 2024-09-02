import { ContentSection } from "@/components/sections";
import Image from "next/image";

const MiningRovers = () => {
  return (
    <>
      <ContentSection title="What is the Project?">
        <p className="paragraph">
          This project focuses on three scenarios that use multiple agents
          cooperatively to mine resources and deposit them back at their
          starting point (base). Each environment increases in difficulty where
          the first contains one agent, the second uses two agents, and the
          third uses four agents.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 1">
        <Image
          src="/project/rover/s1.gif"
          width={500}
          height={500}
          alt="s1 gif"
        />
        <p className="paragraph">
          Scenario 1 is the simplest of the scenarios, requiring the collection
          of one resource using one agent. It follows the{" "}
          <code className="code-snippet">basic_agent.asl</code> to scan and mine
          a single gold node in a 10x10 environment. Being a solo agent, it uses
          a combination of scanning and mining with a scan radius of 3 and a
          capacity of 3. The agent moves around the environment in a pattern,
          scanning for the resource. Once found, it uses the A* algorithm to
          find the shortest path and mines the ore until maximum capacity. Next,
          it uses the A* algorithm again to return home and deposit the ore. The
          agent moves back and forth between the resource and the base until
          depleted.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 2">
        <Image
          src="/project/rover/s2.gif"
          width={500}
          height={500}
          alt="s2 gif"
        />
        <p className="paragraph">
          Scenario 2 requires the collection of four resource nodes using two
          agents. It uses a combination of a dedicated scanner{" "}
          <code className="code-snippet">scanner_s2.asl</code> that communicates
          resource node locations and A* paths to a dedicated miner{" "}
          <code className="code-snippet">miner_s2.asl</code>. The miner waits
          for the scanner to finish scanning the map (finding all resource
          nodes) before signalling to begin mining operations. The miner begins
          mining the nodes in sequence, fully depleting a node before moving on
          to the next one.
        </p>
      </ContentSection>

      <ContentSection title="Scenario 3">
        <Image
          src="/project/rover/s3.gif"
          width={500}
          height={500}
          alt="s3 gif"
        />
        <p className="paragraph">
          Scenario 3 requires the collection of eight resource nodes, split into
          two types (gold and diamond) using four agents. The implementation is
          identical to scenario 2 but with minor additions to accommodate the
          additional agents. It uses two dedicated scanners, both following the{" "}
          <code className="code-snippet">scanner_s3.asl</code> agent format,
          where the agents are assigned separate quadrants of the map (half
          each). The agents move to their quadrants and then begin scanning,
          sending the found resources to each scanner (preventing duplicate
          resource locations) and the respective miner. When the scanners get
          low on energy, they return to base, concluding the map scanning and
          signal the miners to begin mining. The miners cannot start mining
          until both scanners have returned to base. The remaining two agents
          are miners, one for each resource, where both follow the{" "}
          <code className="code-snippet">miner_s3.asl</code> agent format. As
          with scenario 2, the agents deplete a resource and deposit it back at
          base before moving to the next one.
        </p>
      </ContentSection>
    </>
  );
};

export default MiningRovers;
