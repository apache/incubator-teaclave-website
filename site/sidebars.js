// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

import * as fs from 'fs';
import * as path from 'path';

/** @returns {{title: string, items: { name: string, link: string }[]}[]} */
function parseTOC(content = '') {
  const lines = content.split('\n');
  const toc = [];
  let currentCategory = null;

  lines.forEach((line) => {
    // Consider links behind *one* heading are part of the TOC 
    const titleMatch = line.match(/^(#+)\s+(.*)$/);
    if (titleMatch) {
      currentCategory = { title: titleMatch[2].trim(), items: [] };
      toc.push(currentCategory);
    }
    const itemMatch = line.match(/^(-|\*)\s+\[(.*?)\]\((.*?)\)$/);
    if (itemMatch && currentCategory) {
      const itemName = itemMatch[2].trim();
      const itemLink = itemMatch[3].trim();
      currentCategory.items.push({ name: itemName, link: itemLink });
    }
  });

  // Filter out big parent categories
  return toc.filter(category => category.items.length > 0);
}

/** 
 * @param {{ name: string, link: string }} item 
 * @param {string} relpath
*/
function sidebarItemFromTOCItem(item, relpath) {
  if (item.link.startsWith('http')) {
    return {
      type: 'link',
      href: item.link,
      label: item.name,
    };
  } else if(item.link.endsWith('.md')) {
    try {
      fs.statSync('./docs/' + path.join(relpath, item.link));
    } catch (stat) {
      console.log(`File not found: ${path.join(relpath, item.link)}`);
      return undefined;
    }
    return {
      type: 'doc',
      id: path.join(relpath, item.link.replace('.md', '')),
      label: item.name,
    };
  } else {
    console.log(`Unknown link format: ${item.link}`);
    // If the link is not a markdown file or a URL, we ignore it.
    return undefined;
  }
    
}

const repos = {
  'teaclave': parseTOC(fs.readFileSync('./docs/teaclave-docs/website-toc.md', 'utf-8')).map(i => [
    i.title,
    i.items.map(item => sidebarItemFromTOCItem(item, 'teaclave-docs')).filter(Boolean)
  ]),
  'teaclave-sgx-sdk': parseTOC(fs.readFileSync('./docs/teaclave-sgx-sdk/documents/README.md', 'utf-8')).map(i => [
    i.title,
    i.items.map(item => sidebarItemFromTOCItem(item, 'teaclave-sgx-sdk/documents')).filter(Boolean)
  ]),
  'teaclave-trustzone-sdk': parseTOC(fs.readFileSync('./docs/teaclave-trustzone-sdk/docs/README.md', 'utf-8')).map(i => [
    i.title,
    i.items.map(item => sidebarItemFromTOCItem(item, 'teaclave-trustzone-sdk/docs')).filter(Boolean)
  ]),
  'teaclave-faas-legacy': parseTOC(fs.readFileSync('./docs/teaclave-faas-legacy/docs/README.md', 'utf-8')).map(i => [
    i.title,
    i.items.map(item => sidebarItemFromTOCItem(item, 'teaclave-faas-legacy/docs')).filter(Boolean)
  ]),
};

const sidebars = Object.fromEntries(
  Object.entries(repos).map(([name, repo]) => [
    `${name}_sidebar`,
    repo.map(([title, items]) => ({
      type: 'category',
      label: title,
      items: items
    }))
  ])
);

export default sidebars;
