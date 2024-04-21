import BlockchainComponent from "../../components/Blockchain";
import { Main } from "../../components/Main";

export default function BlockchainPage() {
  return (
    <>
      <Main>
        <h1>Blockchain</h1>
        <hr />
        <p>
          To recap what has been covered so far, a <strong>blockchain</strong>{" "}
          is made up of <strong>blocks</strong> that store some data including
          the transactions contained within that block. These blocks are added
          to the chain chronologically to maintain an accurate ledger of
          transactions across time.
        </p>
        <p>
          In order to <strong>mine</strong> a block, verify it, and add it to
          the chain, we must do some "work" by generating{" "}
          <strong>hashes</strong> using the data in the block and a{" "}
          <strong>nonce</strong> we change, until the resulting hash fits some
          requirements set by the blockchain. The amount of hashes statistically
          generated to solve and mine one block is known as the{" "}
          <strong>difficulty</strong>. We can change this difficulty to increase
          or decrease the time spent mining each block. This helps us validate
          the integrity of the blockchain and <strong>disincentivizes</strong>{" "}
          attacks by making the cost (energy and time spent mining) greater than
          any reward gained.
        </p>
        <h2>Adding Blocks to the Chain</h2>
        <p>
          Now we know the basic principles of mining. But how do we go from
          Sally sending some coin to Rob, to that transaction being recorded on
          a block on the blockchain. A basic description is Rob would create
          this transaction and broadcast it so miners would add it to the next
          block to be mined. Then whenever the next block is mined, his
          transaction will be recorded and take effect.
        </p>
        <p>
          To explain this further, we'll dive into a CORE principal of Crypto.
          That is <strong>Decentralization</strong>. Or in other words, the
          distribution of of this blockchain, or ledger of transactions across a
          number of machines. These machines we'll call <strong>nodes</strong>{" "}
          help to distribute the data, mine blocks, and verify the integrity of
          the transactions.
        </p>
        <p>
          There are a few different types of nodes, but for now we can think of
          nodes as any machine that has opted in to be a part of the blockchain
          network. You might make your own computer a node on a network.
          Whenever a user creates a transaction, they will broadcast it to be
          added to next mined block. Once it has been validated and added to the
          pending block, nodes that are set up to mine blocks will work to
          compute the hash. Once this has been solved, the resulting block will
          be broadcasted and validated throughout the network, and eventually
          added as a permanent block to the blockchain.
        </p>
        <img
          style={{ width: "500px", height: "300px" }}
          src='/miners.png'
          alt='Mining Diagram'></img>
        <h2>How Blockchains Avoid Tampering and Maintain Integrity</h2>
        <p>
          There are two mechanisms through which a blockchain can maintain
          integrity. These are consensus and immutability. Consensus is the
          ability of the nodes within the blockchain network to agree on the
          state of the network and on the validity of transactions. Usually, the
          process of achieving consensus is accomplished through a consensus
          algorithm. Previously we've talked about proof of work as a consensus
          mechanism. Immutability is the ability of a blockchain to prevent
          alteration of transactions that have already been confirmed. There are
          multiple aspects that lead to the immutability of a blockchain. The
          aspect of immutability we will focus on is the use of hash signatures.
        </p>
        <p>
          As discussed before, when a block is mined a hash is created with the
          data contained in the block as the input. The nonce is changed untilt
          he resulting hash fits some requirements. To check the validity of the
          block you can recalculate the hash given the data within the block to
          see if the resulting hash is still valid. You can see how this works
          below.
          <br />
          Additionally, each block contains the hash of its previous block which
          is included in its hash calculation. So whenever a block is mutated,
          the hash of the next block in the chain will change and become
          invalid.
        </p>
        <p>
          Below you will see a simulated & isolated blockchain. Feel free to add
          data and mine new blocks. There are effectively <strong>three</strong>{" "}
          ways we can work to maintain the blockchain with the inherent
          properties of the blockchain.
          <p>
            <strong>Check the validity of the Hash</strong>
            <br />
            We can always rehash the block using its contents to check its
            signature. If the block has been tampered with, the hash would not
            match up. If you wanted to successfully tamper with a block, you
            would need to recalculate the hash after changing its content.
          </p>
          <p>
            <strong>Check the validity of the Chain</strong>
            <br />
            If you've changed data in one block and recalculated its hash, that
            wouldn't be able to fool anyone though. As discussed previously,
            each block calculates its own hash with the hash of the previous
            block. This means if you've changed the hash of some block in the
            chain, each subsequent block will recalcuate its hash, becoming
            invalid.
          </p>
          <br />
          <p>
            <strong>Rebuilding the chain would be hard</strong>
            <br />
            So to successfully recreate the chain with valid blocks you would
            need to perform the significantly computational power intensive
            mining operation on each block from the one you affect. You could
            eventually do this for an isolated blockchain, and successfully
            create your own local copy with tampered data. This idea falls apart
            when you need to check this data against a distributed network,
            which we will look at on the next page.
          </p>
        </p>
        <h2>Simulate adding transactions to a blockchain</h2>
        <p>
          Below, you can queue up pending transactions similar to how
          blockchains will. Then similar to a node on the network, you will
          begin mining the list of pending transactions by clicking mine in the
          output section. The answer to the problem, or the nonce that generates
          a valid hash will be shown before the block appears on the chain
          below.
        </p>
      </Main>
      <hr />

      <BlockchainComponent />
    </>
  );
}
