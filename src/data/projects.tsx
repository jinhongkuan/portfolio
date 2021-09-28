import { CardDetails } from '../components/projectCard'
import { parseISO } from 'date-fns'

export const ProjectsList: CardDetails[] = [
  {
    title: '[Paper] Digital Assets as Dynamic Money Supply on the Blockchain',
    date: [parseISO('2021-09-01'), parseISO('2022-05-01')],
    description: (
      <div>
        Thesis exploring the potential of digital assets such as non-fungible
        tokens (NFT) to serve as money supply on the blockchain, accomodating
        increasing currency demand and stabilizing prices. Mentored by Dr.
        Hajime Shimao.
      </div>
    ),
    tags: ['Cryptoeconomics'],
  },
  {
    title: '[App] Keylinq',
    date: [parseISO('2021-06-01'), parseISO('2022-05-01')],
    description: (
      <div>
        Decentralized finance (DeFi) web-app utilizing smart contracts to
        improve contract payments and deposits, particularly for freelancers.
        Currently deployed on Binance Smart Chain (mainnet).
      </div>
    ),
    tags: ['Full-stack Dev', 'DeFi', 'Solidity', 'web3.js'],
    github: 'https://github.com/jinhongkuan/keylinq',
    externalURL: 'https://www.keylinq.com/',
  },

  {
    title: '[Paper] Inferring SDE from Social Science Time-Series',
    date: [parseISO('2020-07-01'), parseISO('2022-05-01')],
    description: (
      <div>
        Ongoing research (as former REU) at Santa Fe Institute on the use of
        Stochastic Differential Equations (SDE) to model dynamical processes in
        social science, including a case study on the socio-political
        development of ancient polities.
      </div>
    ),
    tags: ['Machine Learning', 'Pyro'],
    github: 'https://github.com/shimaohajime/pyro-npsde/tree/main',
    externalURL:
      'https://bafybeidefcm5n75ys7tdqaxvuapp5cka5rkmszput5jyt7wvfrq6jlzveq.ipfs.dweb.link/Kuan_FinalPaper%20%281%29.pdf',
  },

  {
    title:
      '[Paper] Emergence and Stability of Self-Evolved Cooperative Strategies using Stochastic Machines',
    date: [parseISO('2019-10-01'), parseISO('2020-12-01')],
    description: (
      <div>
        Research on the spontaneous emergence of cooperative strategies in games
        of Iterated Prisoner's Dilemma under evolutionary pressure. Published on
        IEEE Symposium Series on Computational Intelligence.
      </div>
    ),
    tags: ['Game Theory', 'Evolutionary Algorithm'],
    github: 'https://github.com/jinhongkuan/evol-sim',
    externalURL: 'https://ieeexplore.ieee.org/abstract/document/9308258',
  },
]
